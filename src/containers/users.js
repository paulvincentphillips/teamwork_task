import React, { useState, useEffect } from "react";
import UsersGrid from "../components/users/index";

export const UsersContainer = () => {
  const [users, setUsers] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [filter, setFilter] = useState("");

  const getUsers = async () => {
    try {
      let allUsers = [];
      let response = await fetch("https://swapi.dev/api/people");
      let jsonData = await response.json();

      //push users to array while there is a next link, push users, repeat...
      while (true) {
        jsonData.results.map((result) => {
          return allUsers.push(result);
        });
        if (jsonData.next) {
          response = await fetch(jsonData.next);
          jsonData = await response.json();
        } else {
          break;
        }
      }

      setUsers(allUsers);
    } catch (error) {
      console.error(error.message);
    }
  };

  const getPlanets = async () => {
    try {
      let allPlanets = [];
      let response = await fetch("https://swapi.dev/api/planets");
      let jsonData = await response.json();

      //push planets to array while there is a next link, push planets, repeat...
      while (true) {
        jsonData.results.map((result) => {
          return allPlanets.push(result);
        });
        if (jsonData.next) {
          response = await fetch(jsonData.next);
          jsonData = await response.json();
        } else {
          break;
        }
      }

      setPlanets(allPlanets);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getUsers();
    getPlanets();
  }, []);

  const getPlanetName = (url) => {
    const splitUrl = url.split("/");
    const planetIndex = splitUrl[splitUrl.length - 2];
    return planets[planetIndex - 1].name;
  };

  return (
    <UsersGrid>
      <UsersGrid.Heading>Filter by name:</UsersGrid.Heading>
      <UsersGrid.UserInput onChange={(e) => setFilter(e.target.value)} />
      <UsersGrid.UserRow>
        <UsersGrid.UserItem>Name</UsersGrid.UserItem>
        <UsersGrid.UserItem>Height (cm)</UsersGrid.UserItem>
        <UsersGrid.UserItem>Mass (kg)</UsersGrid.UserItem>
        <UsersGrid.UserItem>Created</UsersGrid.UserItem>
        <UsersGrid.UserItem>Edited</UsersGrid.UserItem>
        <UsersGrid.UserItem>Planet Name</UsersGrid.UserItem>
      </UsersGrid.UserRow>
      {users.filter(user => user.name.toLowerCase().includes(filter.toLowerCase())).map((user) => {
        return (
          <UsersGrid.UserRow key={user.name}>
            <UsersGrid.UserItem>{user.name}</UsersGrid.UserItem>
            <UsersGrid.UserItem>{user.height}</UsersGrid.UserItem>
            <UsersGrid.UserItem>{user.mass}</UsersGrid.UserItem>
            <UsersGrid.UserItem>{user.created}</UsersGrid.UserItem>
            <UsersGrid.UserItem>{user.edited}</UsersGrid.UserItem>
            <UsersGrid.UserItem>
              {getPlanetName(user.homeworld)}
            </UsersGrid.UserItem>
          </UsersGrid.UserRow>
        );
      })}
    </UsersGrid>
  );
};
