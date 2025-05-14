"use client";
import React, { createContext, useState, useEffect } from "react";
import { get, ref } from "firebase/database";
import { database } from "../firebaseConfig";

const AppContext = createContext();

const AppProvider = ({ children }) => {

  const [projects, setProjects] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [selectedTech, setSelectedTech] = useState('');
  const [displayedProjects, setDisplayedProjects] = useState([]);

  useEffect(() => {
    const projRef = ref(database, 'projects_home');
    get(projRef).then((snapshot) => {
      console.log("projects data:", snapshot.val())
      if (snapshot.exists()) {
        const projArray = Object.entries(snapshot.val()).map(([id, data]) => ({
          id,
          ...data,
        }));
        setProjects(projArray);
        setDisplayedProjects(projArray);
      } else {
        console.log("No Data")
      }
    })
      .catch((error) => {
        console.error(error)
      })

    const techRef = ref(database, 'technologies');
    get(techRef).then((snapshot) => {
      console.log("tech data:", snapshot.val())
      if (snapshot.exists()) {
        const techArray = Object.entries(snapshot.val()).map(([id, data]) => ({
          id,
          ...data,
        }));
        setTechnologies(techArray);
      } else {
        console.log("No Data")
      }
    })
      .catch((error) => {
        console.error(error)
      })

    const blogRef = ref(database, 'blog');
    get(blogRef).then((snapshot) => {
      console.log("blog data:", snapshot.val())
      if (snapshot.exists()) {
        const blogArray = Object.entries(snapshot.val()).map(([id, data]) => ({
          id,
          ...data,
        }));
        setBlogs(blogArray);
      } else {
        console.log("No Data")
      }
    })
      .catch((error) => {
        console.error(error)
      })

  }, [])

  //when project on homepage is clicked, return data for clicked item
  const getProjectByName = (projName) => {
    const projData = projects.find(
      (item) => item.title === projName
    )
    //console.log("product detailed data from context", projData);
    return projData;
  }

  const getBlogByName = (blogName) => {
    const blogData = blogs.find(
      (item) => item.name === blogName
    )
    console.log("blog detailed data from context", blogData);
    return blogData;
  }

  const filterByTech = (techType) => {
    //console.log("selected tech:", techType)
    const filteredProjects = projects.filter((project) => {
      if (techType === "") return true;

      const techCheck = project.tech.filter((techItem) => {
        if (techItem == techType) return true;
      })

      if (techCheck.length > 0) return true;
    });
    //console.log("filtered proj:", filteredProjects)
    setDisplayedProjects(filteredProjects);
  }

  return (
    <AppContext.Provider
      value={{
        projects,
        getProjectByName,
        technologies,
        setSelectedTech,
        selectedTech,
        filterByTech,
        displayedProjects,
        blogs,
        getBlogByName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };