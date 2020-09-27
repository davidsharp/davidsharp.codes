import React from "react"
import YAMLData from "../../content/gists.yaml"
const YAMLbuildtime = () => (
  <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
    <h1>{YAMLData.title}</h1>
    <ul>
      {YAMLData.content.map((data, index) => {
      return <li key={`content_item_${index}`}>
        {data.title} <a src={data.link}>➡</a>
        <br/>
        {data.description}
      </li>
      })}
    </ul>
  </div>
)
export default YAMLbuildtime