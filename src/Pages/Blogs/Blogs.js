import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
  return (
    <div className="container bg-primary">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Difference between javascript and nodejs</Accordion.Header>
          <Accordion.Body>
            Node JS is a lightweight framework that uses very few modules. You can add more modules if required.It is an open-sourced MIT licensed language.To create server-side applications, it works with JavaScript.The programming execution library of Node JS builds on the V8 JavaScript engine.
            Cons Of Node JS.
            <span className="fw-bold">Othe other hand </span>
            Javascripts works with interfaces, modules, and classes to give an interactive look to your web pages.use it for both frontend and backend development.All browsers support JavaScript, and you can run it on almost every device.JavaScript can be extended for developing large applications.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>When should you use nodejs and when should you use mongodb</Accordion.Header>
          <Accordion.Body>
          <span className="fw-bold">For Node js </span>
          Node.js is especially suited for applications that require a persistent connection between the browser and the server. Node.js is really efficient in terms of long polling that otherwise creates extreme load on servers.Real time applications like online games, chat rooms can be created using node.js as it reduces real time latency.Applications using concurrent connections and when each request demands only few CPU cycles are suitable candidates for node.js development.It can be used in the development of sockets only servers like chat and apps.
          <span className="fw-bold">For Mongodb js </span>
          MongoDB is a document database used to build highly available and scalable internet applications. With its flexible schema approach, it’s popular with development teams using agile methodologies. Offering drivers for all major programming languages, MongoDB allows you to immediately start building your application without spending time configuring a database.When you use MongoDB, you have the flexibility to scale horizontally through sharding. Sharding is a method for distributing data across multiple servers. 
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Differences between sql and nosql databases</Accordion.Header>
          <Accordion.Body>
          A SQL database supports structured query language (SQL) — a domain-specific programming language for querying and manipulating data in a relational database. Enables support for diverse workloads. Abstracts data over underlying implementations and allows engines to optimize queries to fit on-disk representations.
          <span className="fw-bold">Othe other hand </span>
          Rooted in graph, document, key-value pairs and wide-column stores developed in the early 1990’s, NoSQL (“Not only SQL”) rose in the mid-2000s due to the emergence of cloud, big data, and web and mobile applications. Today it is the preferred database due to its performance quality, ability to scale and ease of use.Many NoSQL databases are designed to support seamless, online horizontal scalability without significant single points of failure.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Differences between sql and nosql databases</Accordion.Header>
          <Accordion.Body>
          JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.JWT differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blogs;