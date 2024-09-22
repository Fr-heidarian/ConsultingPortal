import { useState, useEffect } from "react";
import { BASE_URL, COMPANY_URL } from "../api/config";
import CompanyCard from "./CompanyCard.js";

export default function Main({ searchTerm }) {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/${COMPANY_URL}?companyName_like=${searchTerm}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const companies = await response.json();
        setCompanies(companies);
      } catch (error) {
        console.error("Error fetching companies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, [searchTerm]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page_content">
      <div className="container">
        <div className="row ">
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </div>
    </div>
  );
}
