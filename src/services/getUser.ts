
import User from "../interfaces/UserInterface";

/**
 * Calls the api to get the user
 * @param name Name of the user to search
 * @returns The user, with the params of the interface User. 
 */

export const getUser = async (name: string): Promise<User> => {
    name = name || 'TaniaGamGonz';
   const response = await fetch(`  https://api.github.com/users/${name}`);
    const response_1 = await response.json();
    const userInfo: User = {
        img: response_1.avatar_url,
        name: response_1.name,
        email: response_1.email,
        bio: response_1.bio,
        followers: response_1.followers,
        location: response_1.location
    };
    return userInfo;
};