🎉 add: openAPI 연습, 날씨 가져오기!!

처음 시작이 막막하다면 먼저 보여주려고 하는 클 틀을 잡아, 
화면을 구성하며 차근차근 기능들을 넣어보자.
앞으로 componets폴더에 파일 분리와, config(KEY같은거), sharde 폴더 안에 Router, context 폴더 안에 전역으로 관리할 context파일등 초기작업을 습관화 하자! 


</br>
</br>
✨ update : weatherAPI 추가!!

fetch데이터로 url을 불러오자, useEffect 훅과 useState 훅을 사용하였다.
아래 코드는 자주 보고 적용해보자.

```
const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState("Seoul");

  const key = config.API_KEY;

  useEffect(() => {
    // API 호출
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=kr&appid=${key}&units=metric`
    ) // 예시 URL
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [location]);

  const displayData = () => {
    if (loading) {
      return <div>Loading...</div>;
    }
```
