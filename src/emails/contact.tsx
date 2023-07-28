import {
  Body,
  Container,
  Heading,
  Html,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface ContactEmailProps {
  name: string,
  email: string,
  message: string
}

export const ContactEmail = ({ name, email, message }: ContactEmailProps) => (
  <Html>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>From: {email}</Heading>
        <Text style={{ ...text, marginBottom: '14px' }}>
          Name: {name}
        </Text>
        <Text style={{ ...text, marginBottom: '14px' }}>
          Message: {message}
        </Text>
        <Text
          style={{
            ...text,
            color: '#ababab',
            marginTop: '34px',
            marginBottom: '0px',
          }}
        >Streakless Stars Window Cleaning
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ContactEmail;

const main = {
  backgroundColor: '#ffffff',
};

const container = {
  paddingLeft: '12px',
  paddingRight: '12px',
  margin: '0 auto',
};

const h1 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
};

const text = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  margin: '24px 0',
};