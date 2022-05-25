import {
  Badge,
  Button,
  Card,
  Group,
  Image,
  Text,
  useMantineTheme,
} from "@mantine/core";

function ProdCard({ product }) {
  const theme = useMantineTheme();
  return (
    <Card shadow="sm" p="lg">
      <Card.Section>
        <Image src={product.image} height={160} alt={product.productName} />
      </Card.Section>

      <Group
        position="apart"
        style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
      >
        <Text weight={500}>{product.productName}</Text>
        <Badge color="pink" variant="light">
          {product.price}
        </Badge>
      </Group>

      <Text size="sm" style={{ lineHeight: 1.5 }}>
        {product.description}
      </Text>

      <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
        Add to cart
      </Button>
    </Card>
  );
}

export default ProdCard;
