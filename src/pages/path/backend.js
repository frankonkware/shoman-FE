import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CardComponent from "../../components/cards"
import { Grid } from "@material-ui/core"
import ListData from "../../components/cards/listData"

const HomePage = () => (
  <Layout>
    <SEO title="Path" />
    <div style={{padding: `2.504rem 5.4875rem 1.45rem`}}>
    <CardComponent
      hint="business and data logic (REST | GraphQL)"
      title="Back-End"
      skills="JavaScript | Python "
      content="Work on the business and data logic of the project, with the interaction with the different databases. 
              You'll only choose one language(JavaScript/Python)"
      actions="Join"
      link="/path/backend"
    />

    <br />
    <h4>Activities</h4>

    <Grid container spacing={2}>
      <Grid item md={3}>
        <ListData
          subTitle="JavaScript"
          data={[
            { id: Math.random() },
            { content: "Version Control(git) - enhance teamwork" },
            {
              content:
                "JavaScript(Vanilla JS) - From syntax to Functional & OOP javascript programming",
            },
            {
              content:
                "ES6 JS code - Async/await, arrow functions, hoisting, closures, etc",
            },
            {
              content:
                "Test Driven Development - Mocha & Chai",
            },
            {
              content:
                "Node JS - create server, file management(read/write)",
            },
            {
              content:
                "Express JS - create RESTful apps, use templating engine(jade/pug), Write tests for your apps",
            },
            {
              content:
                "Database(Postgres, MongoDB, MySQL) - Store your data in a database engine",
            },
            {
              content:
                "GraphQL",
            },
          ]}
        />
      </Grid>
      <Grid item md={3}>
        <ListData
          subTitle="Python"
          data={[
            { id: Math.random() },
            { content: "Version Control(git) - enhance teamwork" },
            {
              content:
                "Python - From syntax to OOP Python programming",
            },
            {
              content:
                "Flask - Build Restful Apps, use flask templating engine ",
            },
            {
              content:
                "Test Driven Development - Pytest, nosetests",
            },
            {
              content:
                "Database(Postgres) - Store your data in a database engine",
            },
            {
              content:
                "Django - optional",
            },
          ]}
        />
      </Grid>
      <Grid item md={3}>
        <ListData
          subTitle="Projects"
          data={[
            { id: Math.random() },
            {
              content:
                "Simple & Scientific Calculator - understand the basics of programming",
            },
            {
              content:
                "Gallery App - data strutures, templating engine, Good coding conventions",
            },
            { content: "Todo App - Perfect your coding skills following Test driven development" },
            {
              content:
                "Weather App - Data management on a database - API",
            },
            {
              content:
                "Meet up Planner - API, data management, Good coding conventions, TDD",
            },
            { content: "Sendit App - An app to send parcels - Final App" },
          ]}
        />
      </Grid>
      <Grid item md={3}>
        <ListData
          subTitle="What Success Looks Like."
          data={[
            { id: Math.random() },
            {
              content:
                `Create good and workable data solutions to be used by Frontend engineers or customers. 
                Follows the right coding conventions.`,
            },
            {
              content:
                `Work as a Backend Engineer/developer, QA engineer, data engineer & scientist(by taking python to next level),
                software engineer/developer, Go ahead and be a fullstack developer`,
            },
          ]}
        />
      </Grid>
    </Grid>
    </div>
  </Layout>
)

export default HomePage
