// Fonction pour tester si un mot est un palindrome
function estPalindrome(mot) {
  // Supprimer les espaces et mettre en minuscules pour ignorer la casse
  mot = mot.replace(/\s/g, '').toLowerCase();

  // Si le mot est vide ou a un seul caractère, c'est un palindrome
  if (mot.length <= 1) {
    return true;
  }

  // Comparaison des caractères aux extrémités du mot
  for (let i = 0; i < Math.floor(mot.length / 2); i++) {
    if (mot[i] !== mot[mot.length - 1 - i]) {
      return false; // Les caractères ne correspondent pas, ce n'est pas un palindrome
    }
  }

  return true; // Tous les caractères correspondent, c'est un palindrome
}