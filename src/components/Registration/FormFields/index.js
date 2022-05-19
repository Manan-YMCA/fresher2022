import React, { useEffect, useState } from "react";
import { CustomTextInput, CustomYearPicker } from "../Inputs";
import { Form, Formik } from "formik";
import Button from "@mui/material/Button";
import { FcGoogle } from "react-icons/fc";
import * as Yup from "yup";
// import CustomButton from "../../Shared/CustomButton";
import ImageUploadBox from "../ImageUploadBox/ImageUploadBox";
// import ErrorModal from "../../Shared/ErrorModal";
// import { ref } from "firebase/storage";
// import { useUploadFile } from "react-firebase-hooks/storage";
// import { storage, auth, db } from "../../firebase";
// import { doc, setDoc } from "firebase/firestore";
// import { getDownloadURL } from "firebase/storage";
// import { useDownloadURL } from "react-firebase-hooks/storage";
// import imageCompression from "browser-image-compression";
// import { useAuthState } from "react-firebase-hooks/auth";
// import LoadingScreen from "../../Shared/LoadingScreen";
// import { useForkRef } from "@mui/material";
//import'./style.css';

const AddProfile = (props) => {
  //   const [user, loading, UserError] = useAuthState(auth);
  //   const [error, setError] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const [SelectedYear, setSelectedYear] = useState(new Date(2021, 1, 1));
  const [formSubmitting, SetFormSubmitting] = useState(false);
  //Upload file
  //   const [uploadFile, uploading, snapshot, uploadError] = useUploadFile();
  //   let profilePicRef;
  //   const [downloadUrl, downloadUrlLoading, downloadUrlError] = useDownloadURL(
  //     user && ref(storage, `members/${user.email}.jpg`)
  //   );

  //   const upload = async (pic, picRef, size) => {
  //     let url;
  //     const options = {
  //       maxSizeMB: size,
  //       maxWidthOrHeight: 1920,
  //       useWebWorker: true,
  //     };
  //     try {
  //       const compressedFile = await imageCompression(pic, options);
  //       console.log(
  //         "compressedFile instanceof Blob",
  //         compressedFile instanceof Blob
  //       ); // true
  //       console.log(
  //         `compressedFile size ${compressedFile.size / 1024 / 1024} MB`
  //       ); // smaller than maxSizeMB
  //       await uploadFile(picRef, compressedFile, {
  //         contentType: "image/jpeg",
  //       }).then(async () => {
  //         await getDownloadURL(picRef).then((downloadUrl) => {
  //           console.log("url", downloadUrl);
  //           url = downloadUrl;
  //         });
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     return url;
  //   };

  //   const dataSubmitHandler = async (values, { setSubmitting, resetForm }) => {
  //     if (!profilePic && user) {
  //       setError("Please select a profile picture");
  //     } else if (profilePic.length === 0) {
  //       setError("Please select a profile picture");
  //     } else if (user) {
  //       profilePicRef = ref(storage, `members/${user.email}.jpg`);
  //       SetFormSubmitting(true);
  //       const data = {
  //         name: values.name,
  //         admission: SelectedYear.getFullYear(),
  //         role: values.role,
  //         frameworks: values.frameworks,
  //         languages: values.languages,
  //         otherSkills: values.otherSkills,
  //         socialLinks: removeEmptySocialLinks(linksArray),
  //         banner: values.banner,
  //         permission: "member",
  //         pfp: await upload(profilePic[0], profilePicRef, 0.1),
  //         email: user.email,
  //       };
  //       await setDoc(doc(db, "userProfiles", user.email), data);
  //       console.log("Data", data);
  //       setProfilePic(null);
  //       setSubmitting(false);
  //       SetFormSubmitting(false);
  //       resetForm();
  //       // history.push(`/user/${auth.userId}`);
  //     }
  //   };

  return (
    <React.Fragment>
      {/* {user && ( */}
      <div>
        {/* {error && (
            <ErrorModal errorText={error} clicked={() => setError(null)} />
          )} */}
        {/* {formSubmitting && <LoadingScreen />} */}
        <div className="flex flex-col gap-2 pb-2 items-center justify-center">
          <p>Already Registered ? </p>
          <Button variant="outlined" startIcon={<FcGoogle />}>
            Login with Google
          </Button>
        </div>
        <div className="">
          <div className="">
            <Formik
              initialValues={{
                name: "",
                roll: "",
                course: "",
                branch: "",
                year: "",
                father: "",
                contact: "",
              }}
              validationSchema={Yup.object({
                // name: Yup.string()
                //   .min(4, "Must be atleast 4 characters")
                //   .max(100, "Cannot exceed 200 character")
                //   .required("Required"),
                // role: Yup.string().required("Required"),
                // languages: Yup.string().required("Required"),
                // frameworks: Yup.string().required("Required"),
                // otherSkills: Yup.string().required("Required"),
                name: Yup.string()
                  .min(4, "Must be atleast 4 characters")
                  .max(100, "Cannot exceed 200 character")
                  .required("Required")
                  .required("Required"),
                roll: Yup.string().required("Required"),
                course: Yup.string().required("Required"),
                branch: Yup.string().required("Required"),
                father: Yup.string().required("Required"),
                contact: Yup.string().required("Required"),
              })}
              onSubmit={() => {}}
            >
              {({ setFieldValue, ...props }) => (
                <Form>
                  <CustomTextInput
                    label="Name"
                    name="name"
                    placeholder="Name here"
                  />
                  <CustomTextInput
                    label="Roll number "
                    name="roll"
                    placeholder="Enter your university roll number"
                  />
                  <CustomTextInput
                    label="Course"
                    name="course"
                    placeholder="Enter your course"
                  />
                  <CustomTextInput
                    label="Branch"
                    name="branch"
                    placeholder="Enter your university roll number"
                  />
                  <CustomYearPicker
                    value={SelectedYear}
                    onChange={(newValue) => {
                      setSelectedYear(newValue);
                    }}
                    label="Year of admission"
                    name="admission"
                    placeholder="Select your year of admission"
                  />
                  <CustomTextInput
                    label="Father's name"
                    name="father"
                    placeholder="Enter your Father's name"
                  />
                  <CustomTextInput
                    label="Contact number"
                    name="branch"
                    placeholder="Enter your contact number"
                  />
                  <div className="m-3 pt-2 pl-2 font-bold">
                    <p>Select your Picture</p>
                  </div>
                  <ImageUploadBox
                    onDrop={(files) => {
                      setProfilePic(files);
                    }}
                  />
                  <div className="mt-6 flex items-center justify-center">
                    <Button
                      variant="contained"
                      isDisabled={props.isSubmitting}
                      type="submit"
                      text={props.isSubmitting ? "Submitting" : "Submit"}
                    >
                      <p className="text-white px-2 text-[16px] font-medium">
                        Submit
                      </p>
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      {/* )} */}
      {/* {!user && (
        <div className="w-screen h-screen">
          <LoadingScreen />
        </div>
      )} */}
    </React.Fragment>
  );
};

export default AddProfile;
