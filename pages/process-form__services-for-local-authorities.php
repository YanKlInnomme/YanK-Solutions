<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $prenom = $_POST["first-name"];
    $nom = $_POST["name"];
    $courriel = $_POST["email"];
    $telephone = $_POST["phone"];
    $adresse = isset($_POST["address"]) ? $_POST["address"] : "";
    $codePostal = isset($_POST["postal-code"]) ? $_POST["postal-code"] : "";
    $ville = isset($_POST["city"]) ? $_POST["city"] : "";
    $coordonnéesGPS = isset($_POST["gps-coordinates"]) ? $_POST["gps-coordinates"] : "";
    $demande = $_POST["service"];
    $age = $_POST["age"];
    $nombre = $_POST["number-participants"];
    $durée = $_POST["game-duration"];
    $scénario = isset($_POST["scenario"]) ? $_POST["scenario"] : "";
    $délai = isset($_POST["deadline"]) ? $_POST["deadline"] : "";
    $partieEnregistrée = isset($_POST["recorded-game"]) ? $_POST["recorded-game"] : "";
    $partiePrivée = isset($_POST["private-game"]) ? $_POST["private-game"] : "";
    $numberSessions = isset($_POST["number-sessions"]) ? $_POST["number-sessions"] : "";
    $coût = $_POST["overall-estimate"];
    
    // Adresse e-mail de destination
    $destinataire = "yanklinnomme@gmail.com";
    
    // Sujet de l'e-mail
    $sujet = "Demande de service : $demande - $prenom $nom";
    
    // Contenu de l'e-mail
    $message = "Prénom: $prenom\n";
    $message .= "Nom: $nom\n";
    $message .= "Courriel: $courriel\n";
    $message .= "Téléphone: $telephone\n";
    $message .= "Adresse: $adresse\n";
    $message .= "Code postal: $codePostal\n";
    $message .= "Ville: $ville\n";
    $message .= "Coordonnées GPS: $coordonnéesGPS\n";
    $message .= "Demande de service: $demande\n";
    $message .= "Âge des participant·e·s: $age\n";
    $message .= "Nombre de participant·e·s: $nombre\n";
    $message .= "Durée de jeu: $durée\n";
    $message .= "Scénario personnalisé: $scénario\n";
    $message .= "Délai inférieur à 1 mois: $délai\n";
    $message .= "Partie enregistrée: $partieEnregistrée\n";
    $message .= "Partie privée: $partiePrivée\n";
    $message .= "Nombre de sessions: $numberSessions\n";
    $message .= "Coût estimé: $coût\n";
    
    // Envoi de l'e-mail
    mail($destinataire, $sujet, $message);
    
    // Redirection après l'envoi du formulaire (vous pouvez personnaliser ceci)
    header("Location: confirmation.html");
    exit();
}
?>
