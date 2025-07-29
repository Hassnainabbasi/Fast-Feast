// import React, { useEffect, useState } from "react";
// import { Button, Form, Input, Modal } from "antd";
// // import { auth } from "../utils/firebase";
// // import { signOut } from "firebase/auth";
// const CheckOutModal = ({
//   isModalOpen,
//   handleOk,
//   checkoutOrder,
//   handleCancel,
// }) => {
//   useEffect(() => {
//     return setContinueAsGuest(false);
//   }, []);

//   const [continueAsGuest, setContinueAsGuest] = useState(false);
//   const isLogin = auth.currentUser;
//   return (
//     <Modal
//       title="Check0ut Modal"
//       open={isModalOpen}
//       onOk={handleOk}
//       closable = {false}
//       footer={null}
//       onCancel={handleCancel}
//     >
//       {!isLogin && !continueAsGuest && (
//         <div className="flex flex-col items-center">
//           <h1 className="text-center my-5">
//             Login to Save your Order's and See Progress
//           </h1>
//           <Button type="primary" >Continue with Google</Button>
//           <h1 className="text-center my-5">----- OR -----</h1>
//           <Button onClick={() => setContinueAsGuest(true)}>
//             Continue as a Guest
//           </Button>
//         </div>
//       )}

//       {isLogin ||
//         (continueAsGuest && (
//           <Form onFinish={checkoutOrder} layout="vertical">
//             <Form.Item name={"username"} label={"Username"}>
//               <Input />
//             </Form.Item>
//             <Form.Item name={"email"} required label={"Email"}>
//               <Input type="email" />
//             </Form.Item>
//             <Form.Item name={"number"} required label={"Phone Number"}>
//               <Input type="number" />
//             </Form.Item>
//             <Form.Item required name={"address"} label={"Address"}>
//               <Input.TextArea placeholder="Address" />
//             </Form.Item>

//             <Form.Item>
//               <Button type="primary" htmlType="submit">
//                 Submit
//               </Button>
//             </Form.Item>
//           </Form>
//         ))}
//     </Modal>
//   );
// };
// // export default CheckOutModal;
// import React, { useEffect, useState } from "react";
// import { Button, Form, Input, Modal } from "antd";

// const CheckOutModal = ({
//   isModalOpen,
//   handleOk,
//   checkoutOrder,
//   handleCancel,
//   isLoggedIn // New prop to check if user is logged in
// }) => {
//   const [continueAsGuest, setContinueAsGuest] = useState(false);

//   useEffect(() => {
//     setContinueAsGuest(false);
//   }, [isModalOpen]); // Reset when the modal opens

//   return (
//     <Modal
//       title="Checkout Modal"
//       open={isModalOpen}
//       onOk={handleOk}
//       closable={false}
//       footer={null}
//       onCancel={handleCancel}
//     >
//       {!isLoggedIn ? ( // Check if user is not logged in
//         <>
//           {!continueAsGuest && (
//             <div className="flex flex-col items-center">
//               <h1 className="text-center my-5">
//                 Login to Save your Orders and See Progress
//               </h1>
//               <Button type="primary" disabled>
//                 Continue with Google (Feature disabled)
//               </Button>
//               <h1 className="text-center my-5">----- OR -----</h1>
//               <Button onClick={() => setContinueAsGuest(true)}>
//                 Continue as a Guest
//               </Button>
//             </div>
//           )}

//           {continueAsGuest && (
//             <Form onFinish={checkoutOrder} layout="vertical">
//               <Form.Item name="username" label="Username" rules={[{ required: true, message: 'Please enter your username!' }]}>
//                 <Input />
//               </Form.Item>
//               <Form.Item name="email" required label="Email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}>
//                 <Input type="email" />
//               </Form.Item>
//               <Form.Item name="number" required label="Phone Number" rules={[{ required: true, message: 'Please enter your phone number!' }]}>
//                 <Input type="tel" />
//               </Form.Item>
//               <Form.Item required name="address" label="Address" rules={[{ required: true, message: 'Please enter your address!' }]}>
//                 <Input.TextArea placeholder="Address" />
//               </Form.Item>

//               <Form.Item>
//                 <Button type="primary" htmlType="submit">
//                   Submit
//                 </Button>
//               </Form.Item>
//             </Form>
//           )}
//         </>
//       ) : (
//         <h1 className="text-center my-5">Proceeding to Checkout...</h1> // Show this message if logged in
//       )}
//     </Modal>
//   );
// };

// // export default CheckOutModal;
// import React, { useEffect, useState } from "react";
// import { Button, Form, Input, Modal } from "antd";
// import { db } from '../firebaseConfig'; // Adjust the path as necessary
// import { addDoc, collection } from "firebase/firestore";

// const CheckOutModal = ({ isModalOpen, handleOk, checkoutOrder, handleCancel, isLoggedIn }) => {
//   const [continueAsGuest, setContinueAsGuest] = useState(false);

//   useEffect(() => {
//     setContinueAsGuest(false);
//   }, [isModalOpen]);

//   const onFinish = async (values) => {
//     // Save order to Firestore
//     await addDoc(collection(db, "orders"), {
//       ...values,
//       // Include any additional information you need
//     });
//     handleOk(); // Close modal or perform additional actions
//   };

//   return (
//     <Modal title="Checkout Modal" open={isModalOpen} footer={null} onCancel={handleCancel}>
//       {!isLoggedIn ? (
//         <>
//           {/* Guest checkout form */}
//           {continueAsGuest && (
//             <Form onFinish={onFinish} layout="vertical">
//               <Form.Item name="username" label="Username" rules={[{ required: true, message: 'Please enter your username!' }]}>
//                 <Input />
//               </Form.Item>
//               <Form.Item name="email" required label="Email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}>
//                 <Input type="email" />
//               </Form.Item>
//               {/* Other fields... */}
//               <Form.Item>
//                 <Button type="primary" htmlType="submit">
//                   Submit
//                 </Button>
//               </Form.Item>
//             </Form>
//           )}
//           {/* ...other guest checkout elements... */}
//         </>
//       ) : (
//         <h1 className="text-center my-5">Proceeding to Checkout...</h1>
//       )}
//     </Modal>
//   );
// };

// // export default CheckOutModal;
// import React, { useEffect, useState } from "react";
// import { Button, Form, Input, Modal } from "antd";
// import { db } from "../firebaseConfig";
// import { addDoc, collection } from "firebase/firestore";

// const CheckOutModal = ({ isModalOpen, handleOk, handleCancel, isLoggedIn, userName, userEmail }) => {
//   const [continueAsGuest, setContinueAsGuest] = useState(false);

//   useEffect(() => {
//     setContinueAsGuest(false);
//   }, [isModalOpen]);

//   const onFinish = async (values) => {
//     // Save order to Firestore
//     try {
//       await addDoc(collection(db, "orders"), {
//         username: userName || values.username, // Fallback to guest username
//         email: userEmail || values.email,
//         number: values.number,
//         address: values.address,
//         // Add any additional order details here
//       });
//       handleOk(); // Close modal or perform additional actions
//     } catch (error) {
//       console.error("Error saving order:", error);
//     }
//   };

//   return (
//     <Modal title="Checkout Modal" open={isModalOpen} footer={null} onCancel={handleCancel}>
//       {!isLoggedIn ? (
//         <>
//           {continueAsGuest && (
//             <Form onFinish={onFinish} layout="vertical">
//               <Form.Item name="username" label="Username" rules={[{ required: true, message: 'Please enter your username!' }]}>
//                 <Input />
//               </Form.Item>
//               <Form.Item name="email" required label="Email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}>
//                 <Input type="email" />
//               </Form.Item>
//               {/* Add other fields... */}
//               <Form.Item>
//                 <Button type="primary" htmlType="submit">
//                   Submit
//                 </Button>
//               </Form.Item>
//             </Form>
//           )}
//           {/* ...other guest checkout elements... */}
//         </>
//       ) : (
//         <h1 className="text-center my-5">Proceeding to Checkout...</h1>
//       )}
//     </Modal>
//   );
// };

// // export default CheckOutModal;
// import React, { useEffect, useState } from "react";
// import { Button, Form, Input, Modal } from "antd";
// import { db } from "../firebaseConfig";
// import { addDoc, collection } from "firebase/firestore";

// const CheckOutModal = ({ isModalOpen, handleOk, handleCancel, isLoggedIn, userName, userEmail, onCheckoutSuccess }) => {
//   const [continueAsGuest, setContinueAsGuest] = useState(false);

//   useEffect(() => {
//     setContinueAsGuest(false);
//   }, [isModalOpen]);

//   // const onFinish = async (values) => {
//   //   // Save order to Firestore
//   //   try {
//   //     await addDoc(collection(db, "orders"), {
//   //       username: userName || values.username, // Fallback to guest username
//   //       email: userEmail || values.email,
//   //       number: values.number,
//   //       address: values.address,
//   //       // Add any additional order details here
//   //     });
//   //     onCheckoutSuccess(); // Call the function to redirect to WhatsApp
//   //     handleOk(); // Close modal or perform additional actions
//   //   } catch (error) {
//   //     console.error("Error saving order:", error);
//   //   }
//   // };
//   const onFinish = async (values) => {
//     try {
//       await addDoc(collection(db, "orders"), {
//         userId: currentUser.uid, // Save the user's ID
//         username: userName || values.username,
//         email: userEmail || values.email,
//         number: values.number,
//         address: values.address,
//         // Add any additional order details here
//       });
//       onCheckoutSuccess(); // Call the function to redirect to WhatsApp
//       handleOk(); // Close modal or perform additional actions
//     } catch (error) {
//       console.error("Error saving order:", error);
//     }
//   };
  
//   return (
//     <Modal title="Checkout Modal" open={isModalOpen} footer={null} onCancel={handleCancel}>
//       {!isLoggedIn ? (
//         <>
//           {continueAsGuest && (
//             <Form onFinish={onFinish} layout="vertical">
//               <Form.Item name="username" label="Username" rules={[{ required: true, message: 'Please enter your username!' }]}>
//                 <Input />
//               </Form.Item>
//               <Form.Item name="email" required label="Email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}>
//                 <Input type="email" />
//               </Form.Item>
//               {/* Add other fields... */}
//               <Form.Item>
//                 <Button type="primary" htmlType="submit">
//                   Submit
//                 </Button>
//               </Form.Item>
//             </Form>
//           )}
//           {/* ...other guest checkout elements... */}
//         </>
//       ) : (
//         <h1 className="text-center my-5">Proceeding to Checkout...</h1>
//       )}
//     </Modal>
//   );
// };

// export default CheckOutModal;
import React from 'react';
import { Modal, Form, Input, Button } from 'antd';

function CheckOutModal({ isModalOpen, handleOk, handleCancel, checkoutOrder, isLoggedIn }) {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    checkoutOrder(values);
  };

  return (
    <Modal
      title="Checkout"
      visible={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={() => form.submit()}>
          Submit
        </Button>,
      ]}
    >
      <Form form={form} onFinish={onFinish}>
        {!isLoggedIn && (
          <>
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input placeholder="Your Name" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }, { type: 'email' }]}
            >
              <Input placeholder="Your Email" />
            </Form.Item>
            <Form.Item
              name="phoneNumber"
              rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
              <Input placeholder="Your Phone Number" />
            </Form.Item>
            <Form.Item
              name="address"
              rules={[{ required: true, message: 'Please input your address!' }]}
            >
              <Input placeholder="Your Address" />
            </Form.Item>
          </>
        )}
        {isLoggedIn && (
          <p>You are logged in. Proceed with your order.</p>
        )}
      </Form>
    </Modal>
  );
}

export default CheckOutModal;
