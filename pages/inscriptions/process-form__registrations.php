<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $prenom = $_POST["prenom"];
    $nom = $_POST["nom"];
    $age = $_POST["age"];
    $telephone = $_POST["telephone"];
    $courriel = $_POST["courriel"];
    $informations = $_POST["informations"];
    $titreSoiree = $_POST["titre-soiree"];
    
    // Vérifiez si la case à cocher de participation est cochée
    $participationChecked = isset($_POST["participation-checkbox"]) ? "Oui" : "Non";
    
    // Vérifiez si la case à cocher de contact commercial est cochée
    $commercialChecked = isset($_POST["commercial-checkbox"]) ? "Oui" : "Non";

    // Vérifiez si la case à cocher de politique de confidentialité est cochée
    $privacyChecked = isset($_POST["privacy-checkbox"]) ? "Oui" : "Non";

    // Adresse e-mail de destination
    $destinataire = "yanklinnomme@gmail.com";

    // Sujet de l'e-mail
    $sujet = "Nouvelle inscription à la Soirée JdR : $titreSoiree";

    // Contenu de l'e-mail
    $message = "Prénom: $prenom\n";
    $message .= "Nom: $nom\n";
    $message .= "Âge: $age\n";
    $message .= "Téléphone: $telephone\n";
    $message .= "Courriel: $courriel\n";
    $message .= "Informations complémentaires:\n$informations\n";
    $message .= "Participation à la Soirée de Jeux de Rôles: $participationChecked\n";
    $message .= "Acceptation de contact commercial: $commercialChecked\n";
    $message .= "Acceptation de la politique de confidentialité: $privacyChecked\n";

    // Envoi de l'e-mail
    mail($destinataire, $sujet, $message);

    // Redirection après l'envoi du formulaire (vous pouvez personnaliser ceci)
    header("Location: ../confirmation.html");
    exit();
}
?>
