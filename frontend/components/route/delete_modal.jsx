import React from 'react';

class DeleteModal extends React.Component {
    constructor(props) {
        super(props);
        debugger;
    }
    render() {
        debugger;
        if (this.props.show === false) {
            return null;
        } else {
            return (
                <div id="modal">
                    <div id="modal-container">
                        <div id="modal-delete">Delete Route?</div>
                        <div id="modal-buttons">
                            <button id="modal-button-ok" onClick={this.props.deleteRoute}>
                                OK
                            </button>
                            <button id="modal-button-cancel" onClick={this.props.hide}>
                                CANCEL
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default DeleteModal;