import React from 'react';

function Portfolio() {

    const projects = [
        {
            name: "All Day Apartments",
            picture: "https://www.gannett-cdn.com/-mm-/aaecbe10d671691c70649b15680d8cfd41233eea/c=0-125-4990-2944/local/-/media/2018/04/02/Phoenix/Phoenix/636582890168963299-Updated-Renderings-2--12.20.17.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp",
            description: "A modern apartment complex with very fine features"
        },
        {
            name: "Nice Building",
            picture: "https://www.dpr.com/uploads/project-hero/Biomedical-Sciences-Partnership-Building-1.jpg",
            description: "This is a description of a very nice building"
        },
        {
            name: "Another Nice Building",
            picture: "https://upload.wikimedia.org/wikipedia/commons/3/37/Calvin_C_Goode_Building_October_6_2013_Phoenix_Arizona_2816x2112_Southwest.JPG",
            description: "This is a description of a very nice building"
        },
        {
            name: "All Day Business Center",
            picture: "https://dtphx.org/wp-content/uploads/2020/04/Kenect-Phoenix.jpg",
            description: "A fake business center that this fake construction company built"
        },
        {
            name: "THE Tech Blog",
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8StlHOh7YQoTMfP3cQLEZx4Pbxjc4qXVDLg&usqp=CAU",
            description: "This company is not real and did not build this building."
        }
    ]


  return (
    <section className="content">
                <div className="row">
        <div className="col-xl-1 col-xs-12">
            <h1 className="content-title">Portfolio</h1>
        </div>
        <div className="col-xl-11 col-xs-12">
            <h4>Buildings That Define Arizona</h4>
            <p>
                seitan heirloom post-ironic pop-up iPhone mlkshk hella selfies fashion axe occupy readymade put a bird on it
                  messenger bag Wes Anderson Schlitz plaid Bushwick.
            </p>
            <div className="d-flex flex-row flex-wrap justify-content-center">
                {projects.map((project, i) => (
                    <img
                        src={project.picture}
                        alt={project.name}
                        class="rounded border img-fluid project-photo m-1"
                    >
                    </img>
                ))}
            </div>
        </div>
        </div>
    </section>
  );
}

export default Portfolio;