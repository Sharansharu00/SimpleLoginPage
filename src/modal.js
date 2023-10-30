import React from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import "./Model-Pagination.css";
function ModalView(props) {
  const {
    modelContainer,
    setModelContainer,
    editValue,
    setEditValue,
    handleSave,
  } = props;
  return (
    <>
      <Dialog
        header="Update Details"
        visible={modelContainer}
        onHide={() => setModelContainer(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
      >
        <div className="card Box flex inputBox justify-content-center">
          <InputText
            placeholder="UserName"
            value={editValue.username1}
            onChange={(e) =>
              setEditValue({ ...editValue, username1: e.target.value })
            }
          />
          <InputText
            placeholder="email"
            value={editValue.email1}
            onChange={(e) =>
              setEditValue({ ...editValue, email1: e.target.value })
            }
          />
            <InputText
            placeholder="PhoneNumber"
            value={editValue.phno1}
            onChange={(e) =>
              setEditValue({ ...editValue, phno1: e.target.value })
            }
          />

          <InputText
            placeholder="Address"
            value={editValue.address1}
            onChange={(e) =>
              setEditValue({ ...editValue, address1: e.target.value })
            }
          />

          <InputText
            placeholder="email"
            value={editValue.nationality1}
            onChange={(e) =>
              setEditValue({ ...editValue, nationality1: e.target.value })
            }
          />
        </div>

        <button className="savebutton" onClick={() => handleSave(editValue)}>
          Save
        </button>
      
      </Dialog>
    </>
  );
}
export default ModalView;
