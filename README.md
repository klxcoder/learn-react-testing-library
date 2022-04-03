# Một số điểm cần chú ý

+ Phân biệt "test suite" với "test case"
+ Nếu tạo app bằng lệnh create-react-app thì "React Testing Library" và "jest" đã được cài sẵn rồi nên ko cần cài nữa
+ Phân biệt "React Testing Library" và "jest"
	+ "jest" cung cấp cú pháp để viết "test suite", "test case", "assertion"
	+ "React Testing Library" cung cấp "render" (để render React Component to virtual DOM), cung cấp "fireEvent" (để có thể click chuột, check vào checkbox, click vào radio, nhập liệu vào input), cung cấp "screen" (để lấy DOM elements, lấy div, lấy form field dựa vào text hoặc dựa vào id, hoặc dựa vào className)
	+ Nói tóm lại: "jest" cung cấp cú pháp để viết test, "React Testing Library" hỗ trợ tương tác với DOM
+ Ngoài thằng "React Testing Library" thì còn có "Enzyme" cũng hỗ trợ tương tác với DOM nhưng mà thằng "Enzyme" nó phức tạp hơn.
+ Các khái niệm, từ khóa sau là của thằng "jest":
	+ describe, test, it, expect, toBe
	+ beforeEach, beforeAll, afterEach, afterAll
+ Các khái niệm, từ khóa sau là của thằng "React Testing Library":
	+ render, fireEvent, screen
	+ getByText, getByTestId
	+ getByRole, getByLabelText, getByPlaceholderText, getByAltText, getByDisplayValue
	+ queryByText
	+ queryByRole, queryByLabelText, queryByPlaceholderText, queryByAltText, queryByDisplayValue
	+ getBy trả về element hoặc error -> ko thích hợp khi muốn check element ko có trong DOM
	+ Khi check element ko có trong DOM -> dùng queryBy
	+ Ngoài getBy và queryBy thì còn có findBy
	+ findByText
	+ findByRole, findByLabelText, findByPlaceholderText, findByAltText, findByDisplayValue
	+ findBy dùng để xử lí bất đồng bộ (Promise, async, await, fetch,...)
+ Phân biệt fireEvent và userEvent
	+ fireEvent trong '@testing-library/react' dùng để click chuột, đặt value cho input,...
	+ userEvent trong '@testing-library/user-event' dùng để gõ vào input
	+ userEvent cũng tương tự fireEvent nhưng:
	+ userEvent giống người thật hơn (có thể gõ vào input, có thể keyup, keydown,...)
	+ fireEvent giống robot hơn