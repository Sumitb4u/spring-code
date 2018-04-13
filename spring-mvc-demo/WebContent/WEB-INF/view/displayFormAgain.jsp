<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Display form</title>
</head>
<body>
<h1>
${param.Name}
</h1>
<h2>
<input type="text" value="${message }">
</h2>
<img src="${pageContext.request.contextPath}/resources/images/1.jpg" >
</body>
</html>