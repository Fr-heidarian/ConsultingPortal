export default function CompanyCard({ company }) {
  return (
    <div className="col-lg-4 col-md-6" key={company.id}>
      <div className="cart_item">
        <div className="three_dots">
          <div className="image_mask">
            <a href="#">
              <img src={company.logoImage} alt={company.companyName} />
            </a>
          </div>
          <a href="#">
            <i className="bi bi-three-dots"></i>
          </a>
        </div>
        <div className="mt-3">
          <a className="user_name" href="#">
            <h5>{company.companyName}</h5>
          </a>
          <div className="role">
            <p className="text-muted">{company.serviceType}</p>
          </div>
        </div>
        <div className="box_content">
          <div className="d-flex justify-between three_dots">
            <span>{company.description}</span>
            <a href="#">
              <i className="bi bi-three-dots"></i>
            </a>
          </div>
          <div>
            <h6>Contact</h6>
            <div className="contact_line">
              <div className="line_phone">
                <i className="bi bi-telephone-fill"></i>
                <p>{company.phone}</p>
              </div>
              <div className="line_email">
                <div>
                  <i className="bi bi-envelope-at-fill"></i>
                </div>
                <p>{company.email}</p>
              </div>
              <div className="line_url">
                <div>
                  <i className="bi bi-globe"></i>
                </div>
                <p>{company.url}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
