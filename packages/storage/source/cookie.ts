import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

async function set(name: string, value: string): Promise<boolean> {
	switch (Platform.OS) {

		case 'ios':
		case 'android':
			await SecureStore.setItemAsync(name, value);
			break;
	
		case 'web':
			document.cookie = `${name}=${value}; expires=Sun, 1 Jan 2023 00:00:00 UTC; path=/; SameSite=strict; Secure`;

		default:
			return false;
			break;
	}

	return true;
}

async function get(name: string): Promise<string | null> {
	switch (Platform.OS) {
		case 'ios':
		case 'android':
			return await SecureStore.getItemAsync(name);			
			break;

		case 'web':
			return ((new RegExp((name || '=') + '=(.*?); ', 'gm')).exec(document.cookie + '; ') || ['', null])[1];
			break;
	
		default:
			return null;
			break;
	}
}

export const Cookie = { get, set };