import type { NextPage } from "next";
import Head from "next/head";

import { gql, useQuery } from "@apollo/client";
import { Grid } from "@mantine/core";
import ProdCard from "../components/ProdCard";

const allProductsQuery = gql`
  query {
    products {
      id
      productName
      description
      price
      image
    }
  }
`;

const Home: NextPage = () => {
  const { data, error, loading } = useQuery(allProductsQuery);

  if (loading) return <p>Loading....</p>;

  if (error) return <p>Oops someting went wrong {error.message}</p>;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {data?.products.map((product) => (
          <Grid>
            <Grid.Col style={{maxWidth: 350}} sm={4} xs={4}>
              <ProdCard product={product}></ProdCard>
            </Grid.Col>
          </Grid>
        ))}
      </main>

      <footer></footer>
    </>
  );
};

export default Home;
