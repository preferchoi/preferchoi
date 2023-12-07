```
yarn create react-app --template @chakra-ui/typescript web
yarn add @apollo/client graphql
yarn add --dev @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo @graphql-codegen/add
```

ApolloProvider를 이용해 app을 감쌌고, 이를 통해서 axios나 fetch 같은 데이터 통신 라이브러리를 사용하지 않고 useQuery 훅을 사용해 서버와 통신할 수 있게 되었다.

graphql-codegen 라이브러리를 이용해 GraphQL쿼리를 자동으로 생성했다. GraphQL Code Generator는 codegen.yml에서 설정한 schema 경로에서 서버와 통신해 schema를 로드하고, documents 경로에 선언된 쿼리, 뮤테이션 등을 로드한다. 그 뒤, 문서와 스키마를 매칭해 자동으로 쿼리나 뮤테이션을 생성해 준다.

@apollo/client/link를 사용해 데이터 흐름에 대한 커스터마이징을 진행한다. 아폴로 클라이언트를 생성할 때, 다음과 같이 처리한다.

```
new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: createApolloCache(),
    link: from([authLink, errorLink, httpLink]),
});
```

link 부분에서 순서대로 선언하면 링크 노드의 연결을 통해 네트워크 요청 동작을 순차적으로 정의할 수 있다. authLink는 다음과 같이 선언했다. setContext 함수로 요청과 이전 컨텍스트를 받고, 컨텍스트에 헤더 부분을 추가하여 토큰을 같이 전송한다.

```
const authLink = setContext((request, prevContext) => {
    const accessToken = localStorage.getItem('access_token');
    return {
        headers: {
            ...prevContext.headers,
            Authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
    };
});
```
