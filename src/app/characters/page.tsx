"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getSavedCharacters, StoredCharacter, deleteCharacter } from "@/modules/character-creator/utils/characterStorage";
import { Plus, Edit, Trash2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

export default function CharactersPage() {
  const router = useRouter();
  const { t } = useI18n();
  const [characters, setCharacters] = useState<StoredCharacter[]>([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [characterToDelete, setCharacterToDelete] = useState<string | null>(null);
  
  useEffect(() => {
    // Load saved characters when component mounts
    const loadCharacters = () => {
      const savedCharacters = getSavedCharacters();
      setCharacters(savedCharacters);
    };
    
    loadCharacters();
    
    // Add event listener for storage changes
    const handleStorageChange = () => {
      loadCharacters();
    };
    
    window.addEventListener("storage", handleStorageChange);
    
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  
  const handleDeleteClick = (name: string) => {
    setCharacterToDelete(name);
    setDeleteDialogOpen(true);
  };
  
  const confirmDelete = () => {
    if (!characterToDelete) return;
    
    const success = deleteCharacter(characterToDelete);
    if (success) {
      // Remove character from state
      setCharacters(prev => prev.filter(char => char.name !== characterToDelete));
      toast.success(t("common.characters.deleted") || "Character deleted", {
        description: t("common.characters.deletedDescription") || "The character has been removed",
      });
    } else {
      toast.error(t("common.characters.deleteFailed") || "Delete failed", {
        description: t("common.characters.deleteFailedDescription") || "There was a problem deleting the character",
      });
    }
    
    setDeleteDialogOpen(false);
    setCharacterToDelete(null);
  };
  
  const handleEditClick = (name: string) => {
    // Navigate to character editor with the name as a query parameter
    router.push(`/?character=${encodeURIComponent(name)}`);
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };
  
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/character-creator">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">{t("common.characters.back") || "Back"}</span>
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">{t("common.characters.title") || "My Characters"}</h1>
        </div>
        
        <Button asChild>
          <Link href="/character-creator">
            <Plus className="mr-2 h-4 w-4" />
            {t("common.characters.create") || "Create New"}
          </Link>
        </Button>
      </div>
      
      {characters.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl font-medium mb-2">{t("common.characters.noCharacters") || "No characters found"}</h2>
          <p className="text-muted-foreground mb-6">
            {t("common.characters.createFirst") || "Create your first character to see it here"}
          </p>
          <Button asChild>
            <Link href="/character-creator">
              <Plus className="mr-2 h-4 w-4" />
              {t("common.characters.createNow") || "Create Character"}
            </Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {characters.map((character) => (
            <Card key={character.id} className="transition-all hover:shadow-md">
              <CardHeader>
                <CardTitle>{character.name}</CardTitle>
                <CardDescription>
                  {character.config.character.race && character.config.character.class && (
                    <span>
                      {character.config.character.race} / {character.config.character.class}
                    </span>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  <p>
                    <span className="font-medium">{t("common.characters.created") || "Created"}:</span>{" "}
                    {formatDate(character.createdAt)}
                  </p>
                  <p>
                    <span className="font-medium">{t("common.characters.updated") || "Updated"}:</span>{" "}
                    {formatDate(character.updatedAt)}
                  </p>
                  <p className="mt-2">
                    <span className="font-medium">{t("common.characters.style") || "Style"}:</span>{" "}
                    {character.config.style}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" onClick={() => handleDeleteClick(character.name)}>
                  <Trash2 className="mr-2 h-4 w-4" />
                  {t("common.characters.delete") || "Delete"}
                </Button>
                <Button size="sm" onClick={() => handleEditClick(character.name)}>
                  <Edit className="mr-2 h-4 w-4" />
                  {t("common.characters.edit") || "Edit"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
      
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t("common.characters.confirmDelete") || "Delete Character"}</AlertDialogTitle>
            <AlertDialogDescription>
              {t("common.characters.confirmDeleteDescription") || 
                "Are you sure you want to delete this character? This action cannot be undone."}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t("common.cancel") || "Cancel"}</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-destructive text-destructive-foreground">
              {t("common.characters.confirmDeleteButton") || "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
