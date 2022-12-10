import { Button } from "@/components/Button/Button";
import { observer } from "mobx-react";
import Head from "next/head";

const Home = observer(() => {
    return (
        <div>
            <Head>
                <title>Home</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <h1>Hello</h1>
            <Button onClick={() => console.log("click")}>Test</Button>
        </div>
    );
});

export default Home;
 