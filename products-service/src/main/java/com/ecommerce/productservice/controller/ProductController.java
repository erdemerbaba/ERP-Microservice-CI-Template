package com.ecommerce.productservice.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ecommerce.productservice.document.Product;
import com.ecommerce.productservice.exception.ResourceNotFoundException;
import com.ecommerce.productservice.repository.ProductRepository;

@CrossOrigin(origins = "*", maxAge = 5800)
@RestController
@RequestMapping("/api/v1")
public class ProductController {
	@Autowired
	private ProductRepository productRepository;

	
	@GetMapping("/products")
	public List<Product> getAllproducts() {
		
		return productRepository.findAll();
	}

	
	@PostMapping("/products")
	public Product createProduct(@RequestBody Product product) {
		
		Random random = new Random();
		product.setId((product.getFirstName() + product.getLastName() + product.getEmailId()) + random.nextInt(1000));
		return productRepository.save(product);
	}

	
	@GetMapping("/products/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable String id) {
		
		Product product = productRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Product not exist with id :" + id));
		return ResponseEntity.ok(product);
	}

	
	@PutMapping("/products/{id}")
	public ResponseEntity<Product> updateProduct(@PathVariable String id, @RequestBody Product productDetails) {
		
		Product product = productRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Product not exist with id :" + id));

		product.setFirstName(productDetails.getFirstName());
		product.setLastName(productDetails.getLastName());
		product.setEmailId(productDetails.getEmailId());
		Product updatedProduct = productRepository.save(product);
		return ResponseEntity.ok(updatedProduct);
	}

	
	@DeleteMapping("/products/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteProduct(@PathVariable String id) {
		
		Product product = productRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Product not exist with id :" + id));

		productRepository.delete(product);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
