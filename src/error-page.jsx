import { useRouteError } from "react-router-dom";
import {  Container, Title, Text, Button, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './error-page.module.css';
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";



export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <MantineProvider theme="dark">
    <Container className={classes.root} id="error-page">
      <div className={classes.label}>404</div>
      <Title className={classes.title}>You have found a secret place.</Title>
      <Text c="dimmed" size="lg" ta="center" className={classes.description}>
        Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has
        been moved to another URL.
      </Text>
      <Group justify="center">
        <Button variant="subtle" size="md" >
          <Link to="/">
          Take me back to home page
          </Link>
        </Button>
      </Group>
    </Container>
    </MantineProvider>
  );
}