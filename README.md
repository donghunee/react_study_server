# API 명세서

get 쏴보기

> # GET  /

## router

> https://127.0.0.1:3000/


Response

```
// 200
{
    message : "success",
    data: {
        reactMessage:"여러분 get 성공하셨어요!!!"
    }
}
```

---
<br>

title, content 업로드

> # POST /

## router

> https://127.0.0.1:3000/


## Request

```
// json
{
    title : "title",
    content : "content"
}
```


## Response

```
// 200
{
    message : "success",
    data: {
        result: {
            _id: "5ddf884726b7becfa9c918be",
            title: "title",
            content: "content",
            _somethingElse: 0    
        }
    }
}
```

---
<br>

이미지 업로드

> # POST /image

## router

> https://127.0.0.1:3000/image

## Request

```
// form-data
{
    image : imageFile
    title : "title",
    content : "content"
}
```


## Response

```
// 200
{
    message : "success",
    data: {
        "result": {
            "_id": "5ddf897026b7becfa9c918bf",
            "images": "https://modoctest.s3.ap-northeast-2.amazonaws.com/1574930800695.jpeg",
            "title": "qweq",
            "content": "ejqiejiq",
            "_somethingElse": 0
        }
    }
}
```
