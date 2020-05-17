import React from "react";
import Icon from "siGit/components/Icon/Icon";
import Button from "siGit/components/Button/Button";
import Tag from "siGit/components/Tag/Tag";
import Text from "siGit/components/Text/Text";
import Title from "siGit/components/Title/Title";
import Flex from "siGit/components/Flex/Flex";

function App() {
  return (
    <Flex direction="vertical" justify="center">
      <Title as="h1" color="#6585ab" align="center">
        Soy un H1
      </Title>
      <Button
        iconLeft="react"
        iconRight="home"
        variant="info"
        rounded="rounded"
      >
        Mi botón
      </Button>
      <Icon name="arrow" size="40px" color="red" />
      <Title as="h4" color="yellow" align="left">
        Soy un H4
      </Title>
      <Tag color="gray" size="10px" rounded="rounded">
        Soy un span
      </Tag>
      <Text color="black" size="20px" align="center">
        Soy un p
      </Text>
    </Flex>
  );
}

export default App;
