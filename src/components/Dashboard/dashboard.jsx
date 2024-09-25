import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { firestore } from './firebaseConfig'; // Adjust the path as needed
import { collection, addDoc } from "firebase/firestore";

function BasicExample() {
  async function savedata() {
    const productName = document.getElementById("productName").value;
    const productDescription = document.getElementById("productDescription").value;
    const productPrice = document.getElementById("formBasicPrice").value;
    const productImage = document.getElementById("formBasicImage").value;

    // Create a new product object
    const product = {
      name: productName,
      description: productDescription,
      price: productPrice,
      image: productImage,
    };

    try {
      // Save to Firestore
      const docRef = await addDoc(collection(firestore, "product"), product);
      console.log("Document written with ID: ", docRef.id);
      // Clear form fields
      document.getElementById("productName").value = "";
      document.getElementById("productDescription").value = "";
      document.getElementById("formBasicPrice").value = "";
      document.getElementById("formBasicImage").value = "";
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div className='container m-auto mt-5 w-50'>
      <Form>
        <Form.Group className="mb-3" controlId="productName">
          <Form.Label className='h4'>اسم المنتج</Form.Label>
          <Form.Control className='border-black' type="text" placeholder="اكتب اسم المنتج" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="productDescription">
          <Form.Label className='h4'>وصف للمنتج</Form.Label>
          <Form.Control className='border-black' type="text" placeholder="تفاصيل للمنتج" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label className='h4'>سعر للمنتج</Form.Label>
          <Form.Control className='border-black' type="number" placeholder="سعر للمنتج" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Label className='h4'>صوره للمنتج</Form.Label>
          <Form.Control className='border-black' type="text" placeholder="رابط صورة للمنتج" />
        </Form.Group>

        <Button variant="primary" onClick={savedata}>
          اضافه منتج
        </Button>
      </Form>
    </div>
  );
}

export default BasicExample;
