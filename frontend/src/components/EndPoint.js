import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/esm/Button";
import ButtonGroup from "react-bootstrap/esm/Button";
import {
  faPenSquare,
  faTrash,
  faEye,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";

import EditEndPointModal from "../viewEndpoints/modals/editModal";
import DeleteEndPointModal from "../viewEndpoints/modals/deleteModal";
import PreviewEndPointModal from "../viewEndpoints/modals/previewModal";

import "./EndPoint.css";

const EndPoint = (props) => {
  const data = props.data;
  const [preview, setPreview] = useState(false);
  const [edit, setEdit] = useState(false);
  const [trash, setTrash] = useState(false);
  const [customUrl, setCustomUrl] = useState(
    `${process.env.REACT_APP_API_URL}/api/1/${data.customUrl}/`
  );

  const previewEndPoint = (event) => {
    event.preventDefault();
    console.log("in previewEndPoint");
    setPreview(true);
  };

  const editEndPoint = (event) => {
    event.preventDefault();
    console.log("in editEndPoint");
    setEdit(true);
  };

  const deleteEndPoint = (event) => {
    event.preventDefault();
    console.log("in deleteEndPoint");
    setTrash(true);
  };

  return (
    <>
      <span>{data.customUrl}</span>
      <ButtonGroup variant="text" size="sm" style={{ float: "right" }}>
        <Button
          className="btn-sm"
          onClick={deleteEndPoint}
          variant="danger"
          style={{ width: "fitContent" }}
        >
          <FontAwesomeIcon icon={faTrash} name="delete" />
        </Button>
        <Button
          className="btn-sm"
          type="submit"
          variant="primary"
          onClick={previewEndPoint}
        >
          <FontAwesomeIcon icon={faEye} name="preview" />
        </Button>
        <Button
          className="btn-sm"
          type="submit"
          variant="primary"
          onClick={editEndPoint}
        >
          <FontAwesomeIcon icon={faPenSquare} name="edit" />
        </Button>
        <Button
          className="btn-sm"
          type="submit"
          variant="primary"
          onClick={() => navigator.clipboard.writeText(customUrl)}
        >
          <FontAwesomeIcon icon={faCopy} name="copyToClipboard" />
        </Button>
      </ButtonGroup>
      {preview && <PreviewEndPointModal data={data} setPreview={setPreview} />}
      {edit && <EditEndPointModal data={data} setEdit={setEdit} />}
      {trash && <DeleteEndPointModal data={data} setTrash={setTrash} />}
    </>
  );
};

export default EndPoint;
