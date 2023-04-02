import { Card, CardHeader, CardBody, Text, Heading } from "@chakra-ui/react";
import { Event } from "@/interfaces";

const Event = ({ title, description }: Event) => (
  <Card maxW="md">
    <CardHeader>
      <Heading size="md">{title}</Heading>
    </CardHeader>
    <CardBody>
      <Text color="black.600" fontSize="2xl">
        {description}
      </Text>
    </CardBody>
  </Card>
);

export default Event;
