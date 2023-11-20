## TypeGraphQL과 graphql의 호환성 문제
```
UnmetGraphQLPeerDependencyError: Looks like you use an incorrect version of the 'graphql' package: "16.8.1". Please ensure that you have installed a version that meets TypeGraphQL's requirement: "^15.3.0".
```
라는 에러가 발생했다. TypeGraphQL의 최신 버전이 graphql의 최신 버전이였던 16.8.1을 호환하지 않는 문제였다.
```
npm uninstall graphql
npm install graphql@15.3.0
```
graphql을 제거하고 15.3.0으로 다시 설치했다.