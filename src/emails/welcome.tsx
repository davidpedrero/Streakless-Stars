import {
  Body,
  Container,
  Heading,
  Html,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface WelcomeEmailProps {
  name: string
}

export const WelcomeEmail = ({ name }: WelcomeEmailProps) => (
  <Html>
    <Body style={main}>
      <Container style={container}>
        <Text style={{ ...text, marginBottom: '14px' }}>
          Hi {name},
        </Text>
        <Text style={{ ...text, marginBottom: '14px' }}>
          Thank you for contacting us.
        </Text>
        <Text style={{ ...text, marginBottom: '14px' }}>
          Our customer success team will be reaching out to assist you very soon.
        </Text>
        <Text
          style={{
            ...text,
            color: '#ababab',
            marginTop: '34px',
            marginBottom: '0px'
          }}
        >All the best,
        </Text>
        <Text
          style={{
            ...text,
            color: '#ababab',
            marginTop: '0px',
            marginBottom: '0px',
          }}
        >Streakless Stars Window Cleaning
        </Text>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmail;

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