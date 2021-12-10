import Left from "./left";
import Post from "./Post";
import Right from "./right";


function Home(){
    return(
        <div style={{display:"flex",maxWidth:"850px",margin:"auto",marginTop:"50px"}}>
            <div>
                <Left/>
            </div>
            <div>
            <Post
              author={{name:"Dylon Samsi",avator:"https://media-exp1.licdn.com/dms/image/C560BAQG6mt48AM9YUw/company-logo_100_100/0/1614418318525?e=1646870400&v=beta&t=E98IvTd_r1S3CQ8gerh39kyvQewr_ngQwY6IDK6dFZM"}}
              content="Software Developer at Tata Consultancy Services Troubleshooting a problem Makes Me Happy"
              time = "1day"
              likes = "300"
            />
            <Post
              author={{name:"Dylon Samsi",avator:"https://media-exp1.licdn.com/dms/image/C560BAQG6mt48AM9YUw/company-logo_100_100/0/1614418318525?e=1646870400&v=beta&t=E98IvTd_r1S3CQ8gerh39kyvQewr_ngQwY6IDK6dFZM"}}
              content="Software Developer at Tata Consultancy Services Troubleshooting a problem Makes Me Happy"
              time = "1day"
              likes = "300"
            />
            <Post
              author={{name:"Dylon Samsi",avator:"https://media-exp1.licdn.com/dms/image/C560BAQG6mt48AM9YUw/company-logo_100_100/0/1614418318525?e=1646870400&v=beta&t=E98IvTd_r1S3CQ8gerh39kyvQewr_ngQwY6IDK6dFZM"}}
              content="Software Developer at Tata Consultancy Services Troubleshooting a problem Makes Me Happy"
              time = "1day"
              likes = "300"
            />
            <Post
              author={{name:"Dylon Samsi",avator:"https://media-exp1.licdn.com/dms/image/C560BAQG6mt48AM9YUw/company-logo_100_100/0/1614418318525?e=1646870400&v=beta&t=E98IvTd_r1S3CQ8gerh39kyvQewr_ngQwY6IDK6dFZM"}}
              content="Software Developer at Tata Consultancy Services Troubleshooting a problem Makes Me Happy"
              time = "1day"
              likes = "300"
            />
            <Post
              author={{name:"Dylon Samsi",avator:"https://media-exp1.licdn.com/dms/image/C560BAQG6mt48AM9YUw/company-logo_100_100/0/1614418318525?e=1646870400&v=beta&t=E98IvTd_r1S3CQ8gerh39kyvQewr_ngQwY6IDK6dFZM"}}
              content="Software Developer at Tata Consultancy Services Troubleshooting a problem Makes Me Happy"
              time = "1day"
              likes = "300"
            />
            </div>
            <div>
                <Right/>
            </div>
        </div>
    )
}
export default Home;