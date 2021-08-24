type SheetsOnOpen = GoogleAppsScript.Events.SheetsOnOpen;
declare var global: any;

import onOpen from './func/onOpen';

global.onOpen = (e: SheetsOnOpen): void => onOpen(e);
