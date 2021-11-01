import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useFirebase from "./useFirebase.js";

const useCart = () => {
  const { user } = useFirebase();
  const { uid, displayName, email } = user;
  const [selectedCourse, setSelectedCourse] = useState([]);

  useEffect(() => {
    fetch(`https://morning-everglades-39414.herokuapp.com/cart/${uid}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          setSelectedCourse(data);
        }
      });
  }, [uid, user]);

  function addToCart(course) {
    const isHave = selectedCourse.find(
      (selected) => selected._id === course._id
    );
    delete course._id;
    course.uid = uid;
    course.email = email;
    course.displayName = displayName;

    if (isHave) {
      Swal.fire("Good job!", "You added this Package Successfully!", "success");
    } else {
      fetch("https://morning-everglades-39414.herokuapp.com/course/add", {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(course),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            const newSelection = [...selectedCourse, course];
            setSelectedCourse(newSelection);
          }
        });
    }
  }

  function remove(id) {
    fetch(`https://morning-everglades-39414.herokuapp.com/delete/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount === 1) {
          const selectAfterRemove = selectedCourse.filter(
            (course) => course._id !== id
          );
          setSelectedCourse(selectAfterRemove);
        } else {
          alert("something went wrong!!");
        }
      });
  }

  return { setSelectedCourse, remove, addToCart, selectedCourse };
};

export default useCart;
