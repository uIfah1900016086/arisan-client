(this["webpackJsonpmern-stack-1"]=this["webpackJsonpmern-stack-1"]||[]).push([[0],{38:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(32),r=n.n(c),i=(n(38),n(39),n(13)),o=n(3),l=n(6),u=n(7),h=n(9),j=n(8),b=n(0),d=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("nav",{className:"navbar navbar-light bg-light navbar-expand-lg",children:[Object(b.jsx)(i.b,{to:"/",className:"navbar-brand",children:"Sistem Pencatatan Arisan"}),Object(b.jsx)("div",{className:"collpase navbar-collapse",children:Object(b.jsxs)("ul",{className:"navbar-nav mr-auto ms-auto",children:[Object(b.jsx)("li",{className:"navbar-item",children:Object(b.jsx)(i.b,{to:"/",className:"nav-link",children:"Rekap Arisan"})}),Object(b.jsx)("li",{className:"navbar-item",children:Object(b.jsx)(i.b,{to:"/create",className:"nav-link",children:"Input Data Arisan"})}),Object(b.jsx)("li",{className:"navbar-item",children:Object(b.jsx)(i.b,{to:"/user",className:"nav-link",children:"Data Peserta Arisan"})}),Object(b.jsx)("li",{className:"navbar-item",children:Object(b.jsx)(i.b,{to:"/createuser",className:"nav-link",children:"Input Peserta Arisan"})})]})})]})}}]),n}(a.Component),m=n(2),p=n(4),O=n.n(p),x=function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.exercise.username}),Object(b.jsxs)("td",{children:["Rp. ",e.exercise.description]}),Object(b.jsx)("td",{children:e.exercise.createdAt.substring(0,10)}),Object(b.jsxs)("td",{children:[Object(b.jsx)(i.b,{to:"/edit/"+e.exercise._id,children:"Ubah"})," |"," ",Object(b.jsx)("a",{href:"#",onClick:function(){e.deleteExercise(e.exercise._id)},children:"Hapus"})]})]})},v=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).deleteExercise=a.deleteExercise.bind(Object(m.a)(a)),a.state={exercises:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.a.get("http://localhost:5000/exercises/").then((function(t){e.setState({exercises:t.data})})).catch((function(e){console.log(e)}))}},{key:"deleteExercise",value:function(e){O.a.delete("http://localhost:5000/exercises/"+e).then((function(e){console.log(e.data)})),this.setState({exercises:this.state.exercises.filter((function(t){return t._id!==e}))})}},{key:"exerciseList",value:function(){var e=this;return this.state.exercises.map((function(t){return Object(b.jsx)(x,{exercise:t,deleteExercise:e.deleteExercise},t._id)}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Rekap Pembayaran Arisan"}),Object(b.jsxs)("table",{className:"table",children:[Object(b.jsx)("thead",{className:"thead-light",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Nama Pengguna"}),Object(b.jsx)("th",{children:"Jumlah Bayar"}),Object(b.jsx)("th",{children:"Tanggal Bayar"}),Object(b.jsx)("th",{children:"Aksi"})]})}),Object(b.jsx)("tbody",{children:this.exerciseList()})]})]})}}]),n}(a.Component),f=(n(19),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onChangeUsername=a.onChangeUsername.bind(Object(m.a)(a)),a.onChangeDescription=a.onChangeDescription.bind(Object(m.a)(a)),a.onSubmit=a.onSubmit.bind(Object(m.a)(a)),a.state={username:"",description:"",users:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.a.get("http://localhost:5000/exercises/"+this.props.match.params.id).then((function(t){e.setState({username:t.data.username,description:t.data.description})})).catch((function(e){console.log(e)})),O.a.get("http://localhost:5000/users/").then((function(t){t.data.length>0&&e.setState({users:t.data.map((function(e){return e.username}))})})).catch((function(e){console.log(e)}))}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,description:this.state.description};console.log(t),O.a.post("http://localhost:5000/exercises/update/"+this.props.match.params.id,t).then((function(e){return console.log(e.data)})),window.location="/"}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Ubah Catatan Latihan "}),Object(b.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Nama Pengguna: "}),Object(b.jsx)("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername,children:this.state.users.map((function(e){return Object(b.jsx)("option",{value:e,children:e},e)}))})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Deskripsi: "}),Object(b.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeDescription})]}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"submit",value:"Simpan",className:"btn btn-primary"})})]})]})}}]),n}(a.Component)),g=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onChangeUsername=a.onChangeUsername.bind(Object(m.a)(a)),a.onChangeDescription=a.onChangeDescription.bind(Object(m.a)(a)),a.onSubmit=a.onSubmit.bind(Object(m.a)(a)),a.state={username:"",description:"",users:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.a.get("http://localhost:5000/users/").then((function(t){t.data.length>0&&e.setState({users:t.data.map((function(e){return e.username})),username:t.data[0].username})})).catch((function(e){console.log(e)}))}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,description:this.state.description};console.log(t),O.a.post("http://localhost:5000/exercises/add",t).then((function(e){return console.log(e.data)})),window.location="/"}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:" Input Data Arisan "})," ",Object(b.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:" Nama: "})," ",Object(b.jsxs)("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername,children:[" ",this.state.users.map((function(e){return Object(b.jsxs)("option",{value:e,children:[" ",e," "]},e)}))," "]})," "]})," ",Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:" Jumlah Bayar: "})," ",Object(b.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeDescription})," "]}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"submit",value:"Simpan",className:"btn btn-primary"})})," "]})," "]})}}]),n}(a.Component),C=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onChangeUsername=a.onChangeUsername.bind(Object(m.a)(a)),a.onChangeNohp=a.onChangeNohp.bind(Object(m.a)(a)),a.onChangeAlamat=a.onChangeAlamat.bind(Object(m.a)(a)),a.onSubmit=a.onSubmit.bind(Object(m.a)(a)),a.state={username:"",nohp:"",alamat:""},a}return Object(u.a)(n,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeNohp",value:function(e){this.setState({nohp:e.target.value})}},{key:"onChangeAlamat",value:function(e){this.setState({alamat:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,nohp:this.state.nohp,alamat:this.state.alamat};console.log(t),O.a.post("http://localhost:5000/users/add",t).then((function(e){return console.log(e.data)})),window.location="/user",this.setState({username:"",nohp:"",alamat:""})}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:" Input Data Peserta Arisan "})," ",Object(b.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:" Nama: "})," ",Object(b.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername})," "]})," ",Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:" No Hp: "})," ",Object(b.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.nohp,onChange:this.onChangeNohp})," "]})," ",Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:" Alamat: "})," ",Object(b.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.alamat,onChange:this.onChangeAlamat})," "]})," ",Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"submit",value:"Simpan",className:"btn btn-primary"})})," "]})," "]})}}]),n}(a.Component),N=function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.user.username}),Object(b.jsx)("td",{children:e.user.nohp}),Object(b.jsx)("td",{children:e.user.alamat}),Object(b.jsxs)("td",{children:[Object(b.jsx)(i.b,{to:"/edituser/"+e.user._id,children:"Ubah"})," |"," ",Object(b.jsx)("a",{href:"#",onClick:function(){e.deleteUser(e.user._id)},children:"Hapus"})]})]})},y=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).deleteUser=a.deleteUser.bind(Object(m.a)(a)),a.state={users:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.a.get("http://localhost:5000/users/").then((function(t){e.setState({users:t.data})})).catch((function(e){console.log(e)}))}},{key:"deleteUser",value:function(e){O.a.delete("http://localhost:5000/users/"+e).then((function(e){console.log(e.data)})),this.setState({users:this.state.users.filter((function(t){return t._id!==e}))})}},{key:"userList",value:function(){var e=this;return this.state.users.map((function(t){return Object(b.jsx)(N,{user:t,deleteUser:e.deleteUser},t._id)}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Data Peserta Arisan"}),Object(b.jsxs)("table",{className:"table",children:[Object(b.jsx)("thead",{className:"thead-light",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Nama"}),Object(b.jsx)("th",{children:"No HP"}),Object(b.jsx)("th",{children:"Alamat"}),Object(b.jsx)("th",{children:"Aksi"})]})}),Object(b.jsx)("tbody",{children:this.userList()})]})]})}}]),n}(a.Component),S=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onChangeUsername=a.onChangeUsername.bind(Object(m.a)(a)),a.onChangeNohp=a.onChangeNohp.bind(Object(m.a)(a)),a.onChangeAlamat=a.onChangeAlamat.bind(Object(m.a)(a)),a.onSubmit=a.onSubmit.bind(Object(m.a)(a)),a.state={username:"",nohp:"",alamat:"",users:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.a.get("http://localhost:5000/users/"+this.props.match.params.id).then((function(t){e.setState({username:t.data.username,nohp:t.data.nohp,alamat:t.data.alamat})})).catch((function(e){console.log(e)})),O.a.get("http://localhost:5000/users/").then((function(t){t.data.length>0&&e.setState({users:t.data.map((function(e){return e.username}))})})).catch((function(e){console.log(e)}))}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeNohp",value:function(e){this.setState({nohp:e.target.value})}},{key:"onChangeAlamat",value:function(e){this.setState({alamat:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,nohp:this.state.nohp,alamat:this.state.alamat};console.log(t),O.a.post("http://localhost:5000/users/update/"+this.props.match.params.id,t).then((function(e){return console.log(e.data)})),window.location="/user"}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Ubah Data Peserta Arisan "}),Object(b.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Nama: "}),Object(b.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"No HP: "}),Object(b.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.nohp,onChange:this.onChangeNohp})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"Alamat: "}),Object(b.jsx)("input",{type:"text",className:"form-control",value:this.state.alamat,onChange:this.onChangeAlamat})]}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"submit",value:"Simpan",className:"btn btn-primary"})})]})]})}}]),n}(a.Component);var k=function(){return Object(b.jsx)(i.a,{basename:"/",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(d,{}),Object(b.jsx)("br",{}),Object(b.jsx)(o.a,{path:"/",exact:!0,component:v}),Object(b.jsx)(o.a,{path:"/edit/:id",component:f}),Object(b.jsx)(o.a,{path:"/create",component:g}),Object(b.jsx)(o.a,{path:"/createuser",component:C}),Object(b.jsx)(o.a,{path:"/user",component:y}),Object(b.jsx)(o.a,{path:"/edituser/:id",component:S})]})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,65)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root")),U()}},[[64,1,2]]]);
//# sourceMappingURL=main.5199b4de.chunk.js.map