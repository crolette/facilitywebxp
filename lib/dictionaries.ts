/* eslint-disable @typescript-eslint/no-unused-vars */
import fr from './i18n/fr.json';
import en from './i18n/en.json';
import de from './i18n/de.json';
import nl from './i18n/nl.json';

// Les traductions chargées dynamiquement selon la langue
export const dictionaries = {
	fr
};

// Types utiles
export type Lang = keyof typeof dictionaries;
export type Dictionary = typeof fr;
