import React, { useState } from "react";
import {
  Search,
  Dropdown,
  Input,
  Button,
  Card,
  Image,
  Icon,
  Segment,
  // Divider,
  Label,
  Feed,
  Form,
} from "semantic-ui-react";

import "./HelpDesk.css";

const dummyData = [
  {
    id: 1,
    name: "Max",
    email: "max@mail.com",
    category: "Standart",
    country: "Canada",
    Room: "160",
    url: "https://www.google.com/search?q=fb+profile+pic&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjLlLjPsvjxAhUG4nMBHT3NDPsQ_AUoAXoECAEQAw&biw=1920&bih=947#imgrc=yRz0asXqc1iKxM",

    messages: [
      "Hello I have a doubt",
      "Is the bag available",
      "I have a problem in my room, it needs to be cleaned.      ",
    ],
  },
  {
    id: 2,
    name: "Carl",
    email: "carl@mail.com",
    category: "Standart",
    country: "Canada",
    Room: "160",
    url: "https://picsum.photos/200",
    messages: [
      "Hello I have a doubt",
      "Is the bag available",
      "Please Look into it",
    ],
  },
  {
    id: 3,
    name: "Lucy",
    email: "lucy@mail.com",
    category: "Standart",
    country: "Canada",
    Room: "160",
    url: "https://picsum.photos/200",
    messages: ["Hello I have a doubt", "Is the bag available"],
  },
  {
    id: 4,
    name: "Jhon",
    email: "jhon@mail.com",
    category: "Standart",
    country: "Canada",
    Room: "160",
    url: "https://picsum.photos/200",
    messages: ["Hello I have a doubt"],
  },
  {
    id: 5,
    name: "Krix",
    email: "krix@mail.com",
    category: "Standart",
    country: "India",
    Room: "160",
    url: "https://picsum.photos/200",
    messages: [
      "Hello I have a doubt",
      "Is the bag available",
      "Thanks for the service",
    ],
  },
  {
    id: 6,
    name: "Harry",
    email: "harry@mail.com",
    category: "Standart",
    country: "Canada",
    Room: "160",
    url: "https://picsum.photos/200",
    messages: [
      "Hello I have a doubt",
      "Is the bag available",
      "Will hope to have it soon",
    ],
  },
  {
    id: 7,
    name: "Karan",
    email: "max@mail.com",
    category: "Standart",
    country: "Canada",
    Room: "160",
    url: "https://picsum.photos/200",
    messages: [
      "Hello I have a doubt",
      "Is the bag available",
      "Please Look into it",
    ],
  },
  {
    id: 8,
    name: "Joe",
    email: "max@mail.com",
    category: "Standart",
    country: "Canada",
    Room: "160",
    url: "https://picsum.photos/200",
    messages: [
      "Hello I have a doubt",
      "Is the bag available",
      "Please Look into it",
    ],
  },
];

const HelpDesk = () => {
  const [customers, setCustomers] = useState(dummyData);

  console.log("customers", customers[0].messages);

  let list = customers.map((item, key) => {
    return (
      <div style={{ marginTop: "1rem", cursor: "pointer" }} key={key}>
        <Card>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="https://picsum.photos/200"
            />
            <Card.Header> {item.name} </Card.Header>
            <Card.Meta> {item.email} </Card.Meta>
            <Card.Description>
              {item.messages[item.messages.length - 1]}
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    );
  });

  const getChats = (userID) => {
    let selectedChat = customers.filter((item) => item.id === userID);
    selectedChat.map((itm, key) => {
      return (
        <div key={key}>
          <Feed.Event>
            <Feed.Label image="/images/avatar/small/joe.jpg" />
            <Feed.Content>
              <Feed.Summary>
                <a>Joe Henderson</a> posted on his page
                <Feed.Date>3 days ago</Feed.Date>
              </Feed.Summary>
              <Feed.Extra text>{itm.messages}</Feed.Extra>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name="like" />5 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>
        </div>
      );
    });
  };

  return (
    <div className="main">
      <div className="header">
        <div className="group">
          <h1 className="title">Conversations</h1>
          <div className="search">
            <Search />
          </div>
          <div className="filter">
            <Dropdown
              text="Filter"
              floating
              labeled
              button
              // className='icon'
            >
              <Dropdown.Menu>
                <Input icon="search" iconPosition="left" className="search" />
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="online">
          <Button basic color="green">
            Online
          </Button>
        </div>
      </div>
      <Segment className="body">
        <div className="list"> {list} </div>
        <Segment className="message">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ marginRight: "4rem", fontWeight: "bold" }}>Max</div>
            <div style={{ marginRight: "4rem" }}>Room: 102</div>
            <div style={{ marginRight: "4rem" }}>Oct 1 - Oct 2</div>
            <Label>Create a task</Label>
          </div>
          <div style={{ marginTop: "2rem", color: "grey" }}>Today</div>
          <div
            style={{
              marginTop: "3rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ fontWeight: "bold", color: "#696969" }}>
              <p>Hi there!</p>
              <p>I have a problem in my room, it needs to be cleaned.</p>
            </div>
            <div style={{ color: "grey" }}>10:34</div>
          </div>
          <div
            style={{
              marginTop: "4rem",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row-reverse",
            }}
          >
            <div
              style={{
                textAlign: "right",
                fontWeight: "bold",
                color: "#696969",
              }}
            >
              <p>Hello Max,</p>
              <p>
                Sorry for the inconviences. I am sending our manager to your
                room 102.
              </p>
            </div>
            <div style={{ color: "grey" }}>10:35</div>
          </div>
          <Form
            style={{
              marginTop: "10rem",
            }}
          >
            <Input icon="attach" fluid placeholder="Reply ...." />
          </Form>
        </Segment>
        <div className="right">
          <div className="about">
            <div>
              <Image
                src="https://picsum.photos/200
                "
                size="small"
                circular
              />
            </div>
            <div
              style={{
                marginTop: "1rem",
                fontSize: "1.5rem",
                textAlign: "center",
              }}
            >
              Max
            </div>
            <div
              style={{
                margin: "0.5rem 0 0.5rem 0",
                color: "green",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Online
            </div>
            <div style={{ display: "flex" }}>
              <Button size="mini" style={{ marginRight: "1rem" }}>
                <Icon name="call" /> Call
              </Button>
              <Button size="mini">
                <Icon name="mail" /> Email
              </Button>
            </div>
            <div
              style={{
                marginTop: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "0 1rem 0 0.5rem",
                }}
              >
                <div style={{ color: "grey" }}>Room</div> <div>102</div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "0 1rem 0 0.5rem",
                }}
              >
                <div style={{ color: "grey" }}>Category</div>
                <div>Standard</div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "0 1rem 0 0.5rem",
                }}
              >
                <div style={{ color: "grey" }}> Country</div> <div>Canada</div>
              </div>
            </div>
          </div>
          <div className="Task"></div>
        </div>
      </Segment>
    </div>
  );
};

export default HelpDesk;