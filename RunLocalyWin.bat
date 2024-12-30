@echo off
:: Personnalisation du titre de la fenêtre
title Gatsby server

:: Navigue dans le dossier où se trouve le script
cd /d "%~dp0"

:: Affiche un message d'information
echo === Run server Gatsby ===

:: Lance la commande Gatsby
gatsby develop