import React, { useState, useEffect } from "react";
import { fetchDetailService } from "../components/utils/Constants";
import { withAuthAdmin } from "../auth/RouteAccess";

const DetailService = () => {
  const [service, setService] = useState(null);

  useEffect(() => {
    // Fetch service details from the server
    fetchDetailService();
  }, []);

  return (
    <div>
      <h1>Service Details</h1>
      {service ? (
        <div>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
          <p>Price: {service.price}</p>
          {/* Render other service details */}
        </div>
      ) : (
        <p>Loading service details...</p>
      )}
    </div>
  );
};

export default withAuthAdmin(DetailService);
