import gpt_2_simple as gpt2

checkpoint_dir = './data/checkpoint'
sess = gpt2.start_tf_sess()
gpt2.load_gpt2(sess, checkpoint_dir=checkpoint_dir)

single_