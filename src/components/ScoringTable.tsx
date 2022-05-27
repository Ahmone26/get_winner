import { Fragment } from "react";
import { tableText } from "../utils/constants";

export default function ScoringTable({ pairs, onClick }: any) {
  return (
    <Fragment>
      <table>
        <tr>
          {tableText.tableHeader.map((heading: any) => {
            return <th key={heading.value}>{heading.label}</th>;
          })}
        </tr>
        {pairs.map((element: any) => {
          return (
            <tr key={element.id}>
              <td>{element.position}</td>
              <td>{element.name}</td>
              <td>{element.score}</td>
            </tr>
          );
        })}
      </table>
      <button type="button" className="primaryBtn" onClick={onClick}>
        {tableText.button}
      </button>
    </Fragment>
  );
}
