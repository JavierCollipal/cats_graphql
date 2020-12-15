import * as React from "react"
import Cats from "../components/Cat/Cats";
import {mockCatData} from "../utils/mock/cats";
// markup
const IndexPage = () => {
  return (
    <main>
    <title>Home Page</title>
    <Cats cats={mockCatData}/>
    </main>
  )
}

export default IndexPage
