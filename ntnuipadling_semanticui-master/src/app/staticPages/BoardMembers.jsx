import React from 'react'
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Segment,
} from "semantic-ui-react";

export default function BoardMembers() {
    return (
        <div>
           

          
        <Header
          as="h2"
          textAlign="center"
          content="Board Members"
          style={{ marginTop: 15 }}
        />
       
       <Header icon>
                  <Icon name="facebook official" color="blue" />
                </Header>
                <Button
                  as="a"
                  basic
                  className="link"
                  color="blue"
                  href="https://www.facebook.com/groups/ntnuipadling/"
                  content="Visit Page"
                />
          
          <Header icon>
                  <Icon name="instagram" color="orange" />
                </Header>
                <Button
                  as="a"
                  basic
                  className="link"
                  color="orange"
                  href="https://www.instagram.com/ntnuipadling/?hl=en"
                  content="Visit Page"
                />
          


       
        </div>
    )
}
