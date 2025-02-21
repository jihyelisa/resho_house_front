import { useParams } from "react-router-dom";

const EventDetail = () => {
  const events = [
    "유진이의 클럼지 벗 해피 라이프",
    "지민이의 당 줄이기 도전",
    "경민이의 헬창일까 아닐까",
    "지혜의 코딩 왜 시작했지",
    "수경이의 실전 미국영어",
    "감자의 하루 십만 자를 써봐요",
    "채원이의 미스테리 서클",
    "정희의 사이버 조각 깎기",
    "소영이의 트릴링구얼로 가는 길",
  ];
  const imagePaths = [
    "/images/photo_sample_1.jpeg",
    "/images/photo_sample_2.jpeg",
    "/images/photo_sample_3.jpeg",
  ];

  const { paramEventId } = useParams();
  const eventId = paramEventId ? parseInt(paramEventId, 10) : -1;
  const eventTitle = eventId < 0 ? "no event detail" : events[eventId];

  return (
    <div className="text-center flex-grow flex flex-col justify-start">
      <span className="top-14 flex-grow bg-white w-full py-8">
        <h2 className="text-3xl font-bold">Event Detail</h2>
        <p className="text-gray-600">{eventTitle}</p>
      </span>
      <div className="flex flex-col flex-grow gap-6 w-full justify-start px-20 py-14 rounded-md bg-blue-100">
        <p className="text-start text-gray-900 whitespace-pre-wrap">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          lobortis erat et est aliquam egestas. Integer et est vitae augue
          molestie feugiat a ut metus. Sed iaculis ligula eu arcu scelerisque,
          vel scelerisque diam elementum. Nam in lacinia ipsum, id auctor dolor.
          Ut nisl ex, rhoncus non urna vel, mattis dictum ante. Pellentesque nec
          pulvinar dolor. Mauris sapien sapien, sodales et leo quis, placerat
          cursus arcu. Cras ornare tempus placerat. In ipsum lacus, dignissim in
          posuere id, lobortis ac sapien. Praesent quam nibh, sodales eu
          dignissim at, ultricies quis lorem. Cras et egestas justo. Vivamus in
          imperdiet dolor. In ante justo, posuere eu feugiat quis, consequat non
          lectus. Pellentesque eleifend sed metus id porttitor. Aliquam sed nisl
          eros. Nunc pellentesque, justo ut ultrices ullamcorper, turpis dolor
          hendrerit metus, ac fermentum nibh metus in nunc. Proin pharetra vitae
          nibh ut pharetra. Nam quis rhoncus nisl. Phasellus maximus a metus nec
          hendrerit. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Mauris cursus vulputate eros. Pellentesque eget lacus nec
          neque accumsan suscipit. Quisque quis congue purus. Quisque sit amet
          lobortis mi, sed cursus elit. Phasellus consectetur convallis feugiat.
          Donec placerat eleifend elit, nec hendrerit dui suscipit et. Vivamus
          posuere justo id urna ullamcorper lobortis. Etiam ut elementum diam.
          Nam laoreet est aliquet diam pulvinar finibus. Maecenas sed orci
          bibendum, rutrum nisl vitae, mattis dolor. Sed et eros lectus.
          Maecenas nec nisi facilisis, posuere tellus nec, consectetur purus.
          Nam eleifend dolor at fermentum volutpat. Sed ut fermentum ipsum.
          Donec eleifend orci sed mauris gravida, ac placerat justo volutpat.
          Etiam efficitur, leo ac pharetra fermentum, sem elit posuere odio, sed
          consequat velit arcu eu nunc. Nulla luctus sapien nec euismod
          convallis. Proin quis mi malesuada, consectetur felis eget, accumsan
          odio. Donec at risus elementum, auctor nisl et, facilisis mauris.
          Maecenas luctus ante at sapien dapibus, at tempus sem commodo. Proin
          non urna at urna porttitor iaculis. Curabitur sit amet commodo lorem.
          Nunc in lacinia nibh, a placerat dui. Nullam ullamcorper erat magna,
          lacinia dictum purus commodo vitae. Sed vel tellus eu metus
          sollicitudin maximus ut in nunc. Ut mauris ligula, malesuada elementum
          faucibus ullamcorper, malesuada a orci. In lectus quam, dapibus ac dui
          ac, laoreet fermentum metus. Aenean sed risus hendrerit, facilisis
          elit id, vulputate arcu. Sed quis sollicitudin sapien. Cras convallis
          nibh eget dui placerat, eget auctor neque sagittis. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Integer in ante facilisis, posuere magna nec, dictum nibh.
        </p>
        <div className="grid grid-cols-3 gap-6">
          {imagePaths.map((path, index) => (
            <span className="rounded-md overflow-hidden max-h-40 flex items-center">
              <img src={path} className="rounded-md" alt="" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
