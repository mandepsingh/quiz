import Modal from '@material-ui/core/Modal';

function BtnModal({visible, onCancel, onOk}){
  return (
    <>
      <Modal
        title="Modal"
        centered
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}
      >
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed dolorem ratione qui iste.<br />
      Dignissimos nisi sint rerum numquam obcaecati voluptatem quidem, quasi rem,<br />
      veritatis voluptatum omnis excepturi, fugit quia harum?</p>
      </Modal>
    </>
  );
};

export default BtnModal;