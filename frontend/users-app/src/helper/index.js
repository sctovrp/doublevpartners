import axios from "axios";
import { URL_SEARCH, URL_FIND } from "../constants";

export const searchUserQuery = async (userInput) => {
  if (userInput === "" || userInput === null || userInput === undefined) return;
  try {
    const params = {
      q: userInput,
      page: 0,
      per_page: 10,
    };

    let userList = []

    const queryAxios = await axios.get(URL_SEARCH, {
      params,
    });

    queryAxios.data.items.forEach(async (user) => {
      const findAxios = await findGitHubQuery(user.login);

      userList.push({
        login: user.login,
        avatar_url: user.avatar_url,
        name: user.name,
        score: user.score,
        id: user.id,
        followers: findAxios.followers
      })
    });

    return userList;
  } catch (error) {
    console.log("error: " + error);
  }
};

export const findGitHubQuery = async (githubInput) => {
  if (githubInput === "" || githubInput === null || githubInput === undefined) return;
  try {
    const queryAxios = await axios.get(URL_FIND + githubInput)
    return queryAxios.data;
  } catch (error) {
    console.log("error: " + error);
  }
};
