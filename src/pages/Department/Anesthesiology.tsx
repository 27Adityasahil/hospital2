import React from 'react'
import CommonBanner from '../../components/CommonBanner'
import Breadcrumb from '../../components/Breadcrumb'
import bannerImg from '../../assets/images1/header9.jpg'


function Anesthesiology() {
    const breadcrumbItems = [
    // { label: "Home", path: "/" },
    { label: "Anesthesiology", path: "/Anesthesiology" },
    ];
  return (
    <>
    <CommonBanner
        title="Doctor's Team"
        subtitle="Comprehensive healthcare services with expert medical professionals"
        backgroundImage={bannerImg}
      />
      <Breadcrumb items={breadcrumbItems} />
    </>
  )
}

export default Anesthesiology