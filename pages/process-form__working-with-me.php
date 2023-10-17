<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $prenom = $_POST["prenom"];
    $nom = $_POST["nom"];
    $courriel = $_POST["courriel"];
    $telephone = $_POST["telephone"];
    $adresse = $_POST["adresse"];
    $codePostal = $_POST["code-postal"];
    $ville = $_POST["ville"];
    $demande = $_POST["demande"];
    $details = $_POST["details"];
    $informations = $_POST["informations"];
    
    // Adresse e-mail de destination
    $destinataire = "yanklinnomme@gmail.com";
    
    // Sujet de l'e-mail
    $sujet = "Nouvelle demande de travail de $prenom $nom";
    
    // Contenu de l'e-mail
    $message = "Prénom: $prenom\n";
    $message .= "Nom: $nom\n";
    $message .= "Courriel: $courriel\n";
    $message .= "Téléphone: $telephone\n";
    $message .= "Adresse: $adresse\n";
    $message .= "Code postal: $codePostal\n";
    $message .= "Ville: $ville\n";
    $message .= "Demande: $demande\n";
    $message .= "Détails de la demande:\n$details\n";
    $message .= "Informations complémentaires:\n$informations\n";
    
    // Envoi de l'e-mail
    mail($destinataire, $sujet, $message);
    
    // Redirection après l'envoi du formulaire (vous pouvez personnaliser ceci)
    header("Location: confirmation.html");
    exit();
}
?>
